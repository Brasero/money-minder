import Home from "../page/Home";
import ProfilPage from "../page/Profil/index.page.tsx";
import Revenu from "../page/Revenu";
import Expenses from "../page/Expenses";
import React from "react";

interface route {
    name: string;
    label: string;
    path: string;
    Element: React.FC;
}

const routes: Array<route> = [
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
]

interface param {
    name: string;
    value: string;
}

export const generatePath = (name: string, params: Array<param> | null = null): string => {

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