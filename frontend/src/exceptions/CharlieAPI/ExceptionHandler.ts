type ConstructorParam = {
  status: number;
  message: string;
}

class ExceptionHandler extends Error {
  public status: number;

  public message: string;

  private localeMessages = [
    {
      error:
        'cityName or (latitude and longitude) was not informed in query string',
      locale: 'Informe uma cidade, estado ou coordenadas',
    },
    {
      error:
        'latitude param must be a number',
      locale: 'As coordenadas informadas não são válidas',
    },
    {
      error:
        'longitude param must be a number',
      locale: 'As coordenadas informadas não são válidas',
    },
    {
      error:
        'Failed to fetch OpenCage API',
      locale: 'Houve um erro com a API OpenCage',
    },
    {
      error:
        'location not found',
      locale: 'Localização não encontrada',
    },
    {
      error:
        'weather not found',
      locale: 'Nenhum clima encontrado para essa localidade',
    },
  ]

  constructor({
    status,
    message,
  }: ConstructorParam) {
    super(message);

    this.status = status;
    this.message = message;

    this.assignFriendlyMessage(message);
  }

  private assignFriendlyMessage(message: string): void {
    const search = this.localeMessages.find(
      (item) => item.error.includes(message),
    );

    this.message = search?.locale || 'Houve um erro não esperado';
  }
}

export default ExceptionHandler;
