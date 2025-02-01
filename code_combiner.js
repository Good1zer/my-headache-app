import fs from 'fs';
import path from 'path';

// Папки и файлы, которые нужно исключить
const excludeDirs = ['.git', 'node_modules', 'public']; // добавь сюда любые другие папки
const excludeFiles = ['package-lock.json']; // добавь сюда любые другие файлы

// Функция для рекурсивного обхода папки и сбора всех файлов по типу
function getFiles(dirPath, extensions = ['.jsx', '.js', '.css'], files = []) {
  const filesInDir = fs.readdirSync(dirPath);
  
  filesInDir.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.lstatSync(fullPath);
    
    if (stat.isDirectory() && !excludeDirs.includes(file)) {
      // Рекурсивно обходим папки
      getFiles(fullPath, extensions, files);
    } else if (stat.isFile() && extensions.includes(path.extname(file)) && !excludeFiles.includes(file)) {
      // Добавляем файл, если его расширение нужное и он не в списке исключений
      files.push(fullPath);
    }
  });

  return files;
}

// Путь к корню проекта
const rootDir = path.resolve();

// Получаем все необходимые файлы в проекте
const filesToInclude = getFiles(rootDir);

// Собираем код всех файлов
let combinedCode = '';
filesToInclude.forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf-8');
  combinedCode += `\n\n// --- ${file} ---\n\n` + fileContent;
});

// Путь для итогового файла
const outputPath = path.join(rootDir, 'combinedCode.jsx');

// Запись в файл
fs.writeFileSync(outputPath, combinedCode);

console.log('Combined code has been written to combinedCode.jsx');
