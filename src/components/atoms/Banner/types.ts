interface AdditionalInfoProps {
   vento: string
   umidade: string
   pressao: string
}

export interface BannerProps {
  imgSrc?: string
  dayTitle: string
  temperature: string
  temperatureDescription?: string
  additionalInfo?: AdditionalInfoProps
  backgroundColor: string
}