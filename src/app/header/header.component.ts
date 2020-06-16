import { Component, OnInit } from '@angular/core';
//import { RouterLinkActive } from '@angular/router';
import { RedirectService, CheckDomainResponseBody } from '../redirect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(private redirectService: RedirectService) { }

  ngOnInit() {
    this.changeHeaderWhileScrolling();
  }

  private changeHeaderWhileScrolling(): void {
    const header: HTMLElement = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > header.offsetHeight)
        header.classList.add('with-shadow');
      else
        header.classList.remove('with-shadow');
    });
  }

  private changeMessageStatus(message: string, success: boolean): void {
    // change message HTML text content and set the class 
  }

  private loadingRedirect(): void {
    console.log('Processando...')
  }

  private continueRedirect(response: CheckDomainResponseBody): void {
    if (response.exists) {
      console.log(response);
    } else {
      console.warn(response);
    }
  }

  private redirectFailed(error: any): void {
    console.warn('Houve o seguinte erro ao tentar realizar a requisição:', error)
  }

  redirectToClient(subdomain: string): void {
    this.loadingRedirect();
    this.redirectService.checkDomain(subdomain)
      .subscribe(this.continueRedirect, this.redirectFailed);
  }

}
