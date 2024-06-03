export async function getBackground() {
    try {
        const res = await fetch(`/api/background`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
  }