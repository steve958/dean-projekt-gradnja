import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { realestate } from "../data/realestateData";
import { priceConverter } from "../helpers/priceconverter";
import "./RealestateComponent.css";
import { setSelectedProperty } from "../features/languageSlice";
import { Realestate } from "./PropertyCard";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../i18n";

type SortMode = "default" | "price_asc" | "price_desc";

const RealestateComponent = () => {
    const { isEng, t } = useLang();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = useState<SortMode>("default");

    useEffect(() => {
        const element = document.getElementsByClassName("realestate_header");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, []);

    const dataMin = useMemo(
        () => Math.min(...realestate.map((r) => r.price)),
        []
    );
    const dataMax = useMemo(
        () => Math.max(...realestate.map((r) => r.price)),
        []
    );

    const filtered = useMemo(() => {
        let list = realestate.filter((entry: Realestate) => {
            if (type && entry.type !== type) return false;
            if (status && entry.status !== status) return false;

            const min = minPrice ? Number(minPrice) : null;
            const max = maxPrice ? Number(maxPrice) : null;
            if (min !== null && entry.price < min) return false;
            if (max !== null && entry.price > max) return false;

            if (search) {
                const q = search.trim().toLowerCase();
                const title = (isEng
                    ? entry.titleEng
                    : entry.titleCro
                ).toLowerCase();
                if (!title.includes(q)) return false;
            }

            return true;
        });

        if (sort === "price_asc") {
            list = [...list].sort((a, b) => a.price - b.price);
        } else if (sort === "price_desc") {
            list = [...list].sort((a, b) => b.price - a.price);
        }

        return list;
    }, [type, status, minPrice, maxPrice, search, sort, isEng]);

    const handleSelectProperty = (property: Realestate) => {
        dispatch(setSelectedProperty(property));
        navigate(`/realestate/${property.id}`);
    };

    const clearFilters = () => {
        setSearch("");
        setType("");
        setStatus("");
        setMinPrice("");
        setMaxPrice("");
        setSort("default");
    };

    const hasFilters = Boolean(
        search || type || status || minPrice || maxPrice || sort !== "default"
    );

    const typeLabel = (entryType: string) => {
        switch (entryType) {
            case "house":
                return t("House", "Kuća");
            case "apartment":
                return t("Apartment", "Stan");
            case "land":
                return t("Land", "Plac");
            default:
                return entryType;
        }
    };

    return (
        <div className="container realestate_container">
            <header className="realestate_header">
                <h1 className="realestate_title">
                    {t("Real Estate", "Prodaja nekretnina")}
                </h1>
                <p className="realestate_subtitle">
                    {t(
                        "Browse our hand-picked portfolio of houses, apartments and land across Croatia.",
                        "Pregledajte našu pomno odabranu ponudu kuća, stanova i zemljišta diljem Hrvatske."
                    )}
                </p>
            </header>

            <div className="filters_bar">
                <div className="filter_field filter_field--search">
                    <label htmlFor="re-search">{t("Search", "Pretraga")}</label>
                    <input
                        id="re-search"
                        type="search"
                        placeholder={t("By name…", "Po nazivu…")}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="filter_field">
                    <label htmlFor="re-type">{t("Type", "Tip")}</label>
                    <select
                        id="re-type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">{t("All", "Sve")}</option>
                        <option value="house">{t("Houses", "Kuće")}</option>
                        <option value="apartment">
                            {t("Apartments", "Stanovi")}
                        </option>
                        <option value="land">{t("Land", "Zemljište")}</option>
                    </select>
                </div>
                <div className="filter_field">
                    <label htmlFor="re-status">{t("Status", "Status")}</label>
                    <select
                        id="re-status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">{t("All", "Sve")}</option>
                        <option value="active">
                            {t("Available", "Dostupno")}
                        </option>
                        <option value="sold">{t("Sold", "Prodano")}</option>
                    </select>
                </div>
                <div className="filter_field">
                    <label htmlFor="re-min">{t("Min €", "Min €")}</label>
                    <input
                        id="re-min"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        step={1000}
                        placeholder={priceConverter(dataMin)}
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>
                <div className="filter_field">
                    <label htmlFor="re-max">{t("Max €", "Max €")}</label>
                    <input
                        id="re-max"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        step={1000}
                        placeholder={priceConverter(dataMax)}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
                <div className="filter_field">
                    <label htmlFor="re-sort">{t("Sort", "Sortiraj")}</label>
                    <select
                        id="re-sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortMode)}
                    >
                        <option value="default">{t("Default", "Zadano")}</option>
                        <option value="price_asc">
                            {t("Price: low → high", "Cijena: niža → viša")}
                        </option>
                        <option value="price_desc">
                            {t("Price: high → low", "Cijena: viša → niža")}
                        </option>
                    </select>
                </div>
                {hasFilters && (
                    <button
                        type="button"
                        className="filter_clear"
                        onClick={clearFilters}
                    >
                        {t("Clear", "Poništi")}
                    </button>
                )}
            </div>

            <div className="results_count">
                {t(
                    `Showing ${filtered.length} of ${realestate.length} properties`,
                    `Prikazano ${filtered.length} od ${realestate.length} nekretnina`
                )}
            </div>

            {filtered.length === 0 ? (
                <div className="empty_state">
                    <p>
                        {t(
                            "No properties match your filters.",
                            "Nijedna nekretnina ne odgovara filterima."
                        )}
                    </p>
                    {hasFilters && (
                        <button
                            type="button"
                            className="filter_clear"
                            onClick={clearFilters}
                        >
                            {t("Clear filters", "Poništi filtere")}
                        </button>
                    )}
                </div>
            ) : (
                <div className="row g-4">
                    {filtered.map((entry: Realestate) => {
                        const title = isEng ? entry.titleEng : entry.titleCro;
                        const isSold = entry.status === "sold";
                        return (
                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={entry.id}
                            >
                                <article
                                    className={`re_card${isSold ? " re_card--sold" : ""}`}
                                    onClick={() =>
                                        !isSold && handleSelectProperty(entry)
                                    }
                                    role={isSold ? undefined : "button"}
                                    tabIndex={isSold ? -1 : 0}
                                    onKeyDown={(e) => {
                                        if (!isSold && e.key === "Enter") {
                                            handleSelectProperty(entry);
                                        }
                                    }}
                                    aria-label={title}
                                >
                                    <div className="re_card_image_wrap">
                                        <img
                                            src={entry.mainImage}
                                            alt={title}
                                            className="re_card_image"
                                            loading="lazy"
                                        />
                                        <span className="re_card_type_badge">
                                            {typeLabel(entry.type)}
                                        </span>
                                        {isSold && (
                                            <span className="re_card_sold_badge">
                                                {t("Sold", "Prodano")}
                                            </span>
                                        )}
                                    </div>
                                    <div className="re_card_body">
                                        <h3 className="re_card_title">{title}</h3>
                                        <div className="re_card_footer">
                                            <span className="re_card_price">
                                                {priceConverter(entry.price)}€
                                            </span>
                                            {!isSold && (
                                                <span className="re_card_link">
                                                    {t("Details", "Detaljnije")} →
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default RealestateComponent;
