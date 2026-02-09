1. install compilerr
   npm init -y
   npm install -D typescript
   npx tsc --init -> membuat file tsconfig json

- Cara Run TS dengan cara Compile dulu ke JS
  npx tsc index.ts -> di compile dulu ke js
  node index.js -> run js nya

- Cara Run TS langsung otomatis
  npm i -D tsx -> install dulu
  npx tsx .\src\index.ts

- Cara cek apakah error atau tidak semua nya
  npx tsc --noEmit

\*Teori

- ts file bersifat global , jadi variable yg di tulis di suatu file , lalu nama variable yg sama di tulis lagi di file yg berbeda , dia akan error , karena sifat file nya global , kecuali di kasih export {}
- sedangkan kalau ada export/import , ini menjadi scope global

- package-lock.json : ini untuk mengunci dependency yg kita pakai , sehingga ketika nnti di clone orng , ketika npm install , akan tetap menggunakan versi yg di gunakan di awal

package-lock json akan berubah ketika kita update versi terbaru , lalu kita npm install , nah ini baru berubah

- package json itu : identitas project , daftar dependencis yg di butuhkan

- node modules hasil install fisik nya

=====================================
lanjutkan besok Casting
