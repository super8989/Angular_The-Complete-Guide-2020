import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // // console.log(this.route.params);
    // const id = parseInt(this.route.snapshot.params['id']);
    // this.server = this.serversService.getServer(id);

    // this.route.params.subscribe((params: Params) => {
    //   // console.log('params', params);
    //   // + is a unary operator (convert operand into number)
    //   this.server = this.serversService.getServer(+params['id']);
    // });

    this.route.data.subscribe((data: Data) => {
      // console.log(data);
      this.server = data['server'];
    });
  }

  onEdit() {
    // const id = this.server.id;
    // this.router.navigate(['/servers', id, 'edit']);

    // using relative path
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
