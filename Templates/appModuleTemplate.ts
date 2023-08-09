export const appModuleTemplate = (value: any) => {
    let template = ``

    let importsTemplate = ``

    let moduleList = ``

    for (let i in value) {
        importsTemplate += `import { ${value[i]}Module } from './${i}/${i}.module';\n`
        moduleList += `\t${value[i]}Module,\n`
    }

    // template for app.module file
    template += `import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
${importsTemplate}

@Module({
    imports: [
${moduleList}],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
`
    return template
}