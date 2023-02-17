import { ICondition } from '@/interfaces'

export class Condition implements ICondition {
  description: string
  icon: string

  constructor({ description, icon }: ICondition) {
    this.description = description
    this.icon = this.getIconUrl(icon)
  }

  private getIconUrl(iconId: string) {
    const cleanIconId = iconId.replace(/\D/g, '')

    return `${cleanIconId}.svg`
  }
}
