async function get<Type>(url: string): Promise<Type | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;

    const data: Type = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export const httpService = {
  get,
};
