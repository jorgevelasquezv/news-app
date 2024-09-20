// Exportación de una interfaz llamada APINewsResponse, que define la estructura de la respuesta de la API de noticias.
export interface APINewsResponse {
  // Estado de la respuesta, generalmente un mensaje como "success" o "error".
  status: string;

  // Número total de resultados devueltos por la API.
  totalResults: number;

  // Lista de artículos devueltos, cada uno representado por la interfaz Article.
  articles: Article[];
}

// Exportación de una interfaz llamada Article, que define la estructura de un artículo de noticias.
export interface Article {
  // ID opcional del artículo, que puede no estar presente.
  id?: string;

  // Fuente de la que proviene el artículo, representada por la interfaz Source.
  source: Source;

  // Autor del artículo, que puede ser nulo o un string.
  author: null | string;

  // Título del artículo.
  title: string;

  // Descripción del artículo.
  description: string;

  // URL del artículo para acceder a la fuente original.
  url: string;

  // URL de la imagen asociada al artículo, que puede ser nula o un string.
  urlToImage: null | string;

  // Fecha en que se publicó el artículo.
  publishedAt: Date;

  // Contenido completo del artículo.
  content: string;
}

// Exportación de una interfaz llamada Source, que define la estructura de la fuente de un artículo.
export interface Source {
  // ID opcional de la fuente, que puede ser nulo o un string.
  id: null | string;

  // Nombre de la fuente de noticias.
  name: string;
}
