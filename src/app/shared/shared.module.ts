import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'app/app-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(ArticlesData),
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
    ],
    exports: [HeaderComponent],
})
export class SharedModule {}
