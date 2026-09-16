// Bonus: colored terminal output (ANSI) + timestamped logs
const COLORS = {
  INFO: '\x1b[36m',    // cyan
  SUCCESS: '\x1b[32m', // green
  ERROR: '\x1b[31m',   // red
  WARN: '\x1b[33m',    // yellow
};
const RESET = '\x1b[0m';

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const color = COLORS[level] || '';
  console.log(`${color}[${timestamp}] [${level}] ${message}${RESET}`);
}

module.exports = { log };
