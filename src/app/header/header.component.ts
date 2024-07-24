import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdown(): void { 
    const dropdownBtn = document.getElementById("dropdownbtn") as HTMLElement;
    if (dropdownBtn) {
        if (dropdownBtn.style.display === 'none' || dropdownBtn.style.display === '') {
            dropdownBtn.style.display = 'block';
        } else {
            dropdownBtn.style.display = 'none';
        }
    }
}
  
}


