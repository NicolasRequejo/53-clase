import { create } from "zustand" // Importamos el método `create` de la librería zustand.
 
const useUserStore = create(set => ({ // Creamos el modelo de nuestro store.
  tema: "oscuro", // Configuramos el valor inicial del campo `tema`.
  toggleTema: () => // Configuramos la lógica del setter para el campo `tema`.
    set(state => ({ tema: state.tema === "oscuro" ? "claro" : "oscuro" })),
}))
 
export { useUserStore }
