import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(players: any, term: any): any {
    if(term===undefined){
      return players;
    }

    return players.filter(function(player){
      return player.name.toLowerCase().includes(term.toLowerCase())
    });
  }

}
