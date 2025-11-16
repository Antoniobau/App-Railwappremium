
Instrucciones completas para crear ZIP:

1) Método rápido usando git:
git archive -o ../WebSite100.zip HEAD

2) Usar utilidad zip en Linux/macOS:
zip -r WebSite100.zip trafico-platform/

3) PowerShell en Windows:
Compress-Archive -Path .\trafico-platform\* -DestinationPath .\WebSite100.zip -Force

4) Script Node.js con archiver:
npm install archiver --save-dev

5) Crear ZIP desde Docker:
docker run --rm -v "$(pwd)":/src -w /src alpine sh -c "apk add zip && zip -r WebSite100.zip trafico-platform"

6) Problemas comunes:
- Excluir node_modules
- Permisos
- Archivos .env
