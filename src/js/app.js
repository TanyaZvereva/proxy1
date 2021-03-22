export function orderByProps(obj, criterias) {
  const prevProps = []
  for(const prop of criterias) {
      prevProps.push({key: prop, value: obj[prop]})
  }
  const otherProps = []
  for(const prop in obj) {
      if(!criterias.includes(prop)) {
        otherProps.push({key: prop, value: obj[prop]})
      }    
  }
  otherProps.sort((a,z) => a.key.localeCompare(z.key))
  return prevProps.concat(otherProps)
}
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
orderByProps(obj,['name', 'level'])
