import { create } from "zustand" // Creamos un nuevo store para las navegación.
 
const usePagesStore = create(set => ({
  page: "home", // Declaramos el campo `page`.
  navigateTo: pageString => set(() => ({ page: pageString })), // Seteamos page con el valor enviado en el componente.
}))
 
export { usePagesStore }