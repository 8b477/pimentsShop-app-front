import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shop'
})
export class ShopPipe implements PipeTransform {

transform(value: string): string 
{
  let color : string = ""
  switch (value) 
  {
    case "Doux":
        color = "bg-info-subtle"
      break;
  
    case "Extrême":
        color = "bg-danger"
      break;

    case "Modéré":
        color = "bg-success"
      break;

    case "Hot":
        color = "bg-warning"
      break;

    default:
      break;
  }

    return color;
}

}
