import React from "react";
import { Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading...";
    }
    const datarr = [
        {
            class: styles.infected,
            value: confirmed.value,
            title: "Infected",
            subtitle: "Number of active cases from COVID-19.",
        },
        {
            class: styles.recovered,
            value: recovered.value,
            title: "Recovered",
            subtitle: "Number of recovered cases from COVID-19.",
        },
        {
            class: styles.deaths,
            value: deaths.value,
            title: "Deaths",
            subtitle: "Number of deaths cases from COVID-19.",
        },
    ];

    return (
        <div className={styles.container}>
            <Typography gutterBottom variant="h4" component="h2"></Typography>
            <Grid container spacing={3} justify="center">
                {datarr.map(x=> <CardComponent
                    className={x.class}
                    cardTitle={x.title}
                    value={x.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle={x.subtitle}
                />)}
            </Grid>
        </div>
    );
};

export default Cards;
