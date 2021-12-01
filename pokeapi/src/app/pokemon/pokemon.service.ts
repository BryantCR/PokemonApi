import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon:any[] = [];
  pokemonWithSameAbility:any[] = [];

  constructor(private _http: HttpClient) { 
    this.fetchPokemon();
    this.fetchPokemonWithSameAbility();
  }

  fetchPokemon(): void{
    this._http.get("https://pokeapi.co/api/v2/pokemon/658")
    .subscribe((data:any) =>{
      this.pokemon = data;
      console.log("This will log my favorite pokemon's name");
      console.log(data.species.name);
      console.log("DATA", this.pokemon);
      console.log("Greninja is a type "+ data.types[0].type.name + " and " + data.types[1].type.name + " pokemon")
      console.log("greninja abilities are "+ data.abilities[0].ability.name + " and " + data.abilities[1].ability.name)
    });
  }

  fetchPokemonWithSameAbility(): void{
    this._http.get("https://pokeapi.co/api/v2/ability/67")
    .subscribe((data:any)=>{
      this.pokemonWithSameAbility = data;
      console.log("Info here", this.pokemonWithSameAbility);
      console.log("There are " + data.pokemon.length + " pokemon that shares the " + data.name + " hability")
    });
  }
}
