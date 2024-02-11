/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process')
const path = require('path')

const chokidar = require('chokidar')

// 디렉토리 경로를 지정합니다.
const directoryPath = path.join(__dirname, '..', '..', 'public', 'icons')

// chokidar 인스턴스를 생성합니다.
/**
 * 예시는 다음과 같습니다:
 * .env: 이 파일 이름은 점(.)으로 시작하므로 정규표현식과 일치합니다.
 * /home/user/.bashrc: 이 경로는 / 뒤에 점(.)으로 시작하는 부분이 있으므로 정규표현식과 일치합니다.
 * C:\\Users\\User\\.config: 이 경로는 \\ 뒤에 점(.)으로 시작하는 부분이 있으므로 정규표현식과 일치합니다.
 * 이 정규표현식은 이러한 dotfiles를 무시하도록 chokidar에 지시합니다. 따라서 chokidar는 이러한 파일의 변경을 감지하지 않습니다.
 */
const watcher = chokidar.watch(directoryPath, {
  ignored: /(^|[/\\])\../, // dotfiles를 무시합니다.
  persistent: true,
})

// 'add', 'change', 'unlink' 이벤트를 감지하여 스크립트를 실행합니다.
watcher.on('add', runScript)
watcher.on('change', runScript)
watcher.on('unlink', runScript)

function runScript() {
  exec('node src/libs/updateIconNames.js', (err) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }
  })
}
