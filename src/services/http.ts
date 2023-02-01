interface HttpGetParams {
  url: string;
  params?: object;
}

interface HttpGetResult<Type> {
  success: boolean;
  data: Type;
}

const get = async <Type>({
  url,
  params,
}: HttpGetParams): Promise<HttpGetResult<Type>> => {
  const failedResult = { success: false, data: {} as Type };

  try {
    const response = await fetch(url, params);

    if (!response.ok) {
      return failedResult;
    }

    const data: Type = await response.json();

    if (!data) {
      return failedResult;
    }

    return { success: true, data };
  } catch (error) {
    return failedResult;
  }
};

export const httpService = {
  get,
};
