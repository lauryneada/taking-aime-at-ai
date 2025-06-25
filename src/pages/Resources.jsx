import React from "react"
import {Container, Typography, Box, Grid, Tabs, Tab} from "@mui/material";
import MediaCard from "../components/MediaCard";
import FilledBoxedText from "../components/FillBoxedText";
import ResourceTabs from "../components/ResourceTabs";

export default function Resources() {
    return (
        <>
        <Typography variant='h2' sx={{padding: 2, textAlign: 'center'}}>Resource Center</Typography>
        <ResourceTabs />
        </>
        
        
    );
}