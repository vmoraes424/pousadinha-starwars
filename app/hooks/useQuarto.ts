export interface Quarto {
  id: number;
  titulo: string;
  preco: number;
  foto: string;
  media: number;
}

export default async function useQuarto() {
  try {
    const response = await fetch("http://localhost:3004/quarto");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const quartos: Quarto[] = await response.json();
    return { quartos };
  } catch (error) {
    console.error("Failed to fetch quartos:", error);
    return { quartos: [] }; // Return an empty array in case of error
  }
}
