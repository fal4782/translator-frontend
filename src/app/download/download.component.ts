import { Component } from '@angular/core';
import  html2canvas from 'html2canvas'

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  // oneAtATime! : boolean 

  // click(e:any){
  //   console.log(e.target.checked);
  //   this.oneAtATime = e.target.checked
  // }

  // downloadPageVanillaCSS() {

  //   const containerElement = document.getElementById('containerElement');

  //   if (containerElement) {

  //     const containerHtml = containerElement.innerHTML;
      
  //     const blob = new Blob([containerHtml], {
  //       type: 'text/html'
  //     });

  //     const a = document.createElement('a');
  //     a.href = window.URL.createObjectURL(blob);

  //     a.download = 'page.html';
  //     document.body.appendChild(a);

  //     a.click();
  //     document.body.removeChild(a);

  //   }


  // }

  // downloadPageAsItIs() {

  //   const containerElement = document.getElementById('containerElement');

  //   if (containerElement) {

  //     // const containerHtml = containerElement.innerHTML;

  //     html2canvas(containerElement).then(canvas => {

  //       const dataURL = canvas.toDataURL('image/png');
  //       const a = document.createElement('a');
  //       a.href = dataURL
  
  //       a.download = 'page.png';
  //       document.body.appendChild(a);
  
  //       a.click();
  //       document.body.removeChild(a);
  //     })
      
  //   }

  // }


}
