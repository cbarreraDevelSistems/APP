import { Pipe, PipeTransform, resource } from "@angular/core";

@Pipe({
    name: "cambiaLetras"
})

export class cambiaLetrasPipe implements PipeTransform{

    transform(value: string, mayus: boolean) {
        let result = value.replaceAll("e", "3")
            .replaceAll("i","1");

        if(mayus){
            result = result.toUpperCase();
        }

        return result;
    }
}