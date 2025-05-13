import React from 'react'
import { useUserStore } from '../stores/useUserStore'

export default function Nieto() {
    const tema = useUserStore(state => state.tema)
    const toggleTema = useUserStore(state => state.toggleTema)

    return <button onClick={toggleTema}>{tema === "oscuro" ? "🌙" : "🌞"}</button>
}
