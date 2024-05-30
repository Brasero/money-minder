import Home from "../page/Home";
import ProfilPage from "../page/Profil/index.page.tsx";
import Revenu from "../page/Revenu";
import Expenses from "../page/Expenses";
import React from "react";


const routes: readonly [
    {
        path: "/";
        Element: React.FC;
        name: "home";
        label: "Home"
    },
    {
        path: "/profile";
        Element: React.FC;
        name: "profil";
        label: "Profil"
    },
    {
        path: "/revenu";
        Element: React.FC;
        name: "revenu";
        label: "Revenu"
    },
    {
        path: "/expenses";
        Element: React.FC;
        name: "expense";
        label: "Expenses"
    }] = [
    {
        name: 'home',
        label: "Home",
        path: "/",
        Element: Home
    },
    {
        name: 'profil',
        label: "Profil",
        path: "/profile",
        Element: ProfilPage
    },
    {
        name: 'revenu',
        label: "Revenu",
        path: "/revenu",
        Element: Revenu
    },
    {
        name: "expense",
        label: "Expenses",
        path: "/expenses",
        Element: Expenses
    }
] as const

const routesName = routes.map(route => route.name)

type RouteName = typeof routesName[number]

interface param {
    name: string;
    value: string;
}

export const generatePath = (name: RouteName, params: Array<param> | null = null): string => {

    const route = routes.find(r => r.name === name)

    if (!route) {
        throw new Error(`La route ${name} est inconnu dans la liste des routes. routeconfig.js: generatePath();`)
    }

    if (!params) {
        return route.path
    }
    let path: string = route.path
    for (const {name, value} of params) {
        path = path.replace(`:${name}`, value)
    }
    return path
}

export default routes