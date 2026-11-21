const workbooks = [
  { id:'anxiety', title:'When anxiety is loud', gentle:'You don’t need to make the feeling disappear. Start by noticing what’s here.', prompts:['What is my mind warning me about right now? What do I know for certain, and what am I afraid might happen?','Where do I feel this in my body? What might help my body feel 1% safer in this moment?','If someone I cared about felt this way, what would I want them to hear?'] },
  { id:'low-mood', title:'Depression & low mood', gentle:'Small is enough. You can answer with a word, a sketch, or leave the page blank.', prompts:['What has felt especially heavy lately? What feels hardest to put into words?','What basic need has been hardest to meet lately: rest, food, movement, connection, or something else?','Is there one small thing that has brought even a moment of comfort, connection, or relief?','What is one kind, very manageable thing I could offer myself today?'] },
  { id:'addiction', title:'Addiction & urges', gentle:'This is a place for curiosity, not blame. Change can take time, and support is available.', prompts:['What tends to happen just before an urge? What feeling, need, or situation might be part of it?','What does using or repeating this behavior offer me in the short term? What do I wish were different afterward?','What has helped me get through an urge, even briefly? What could make that support easier to reach?','Who could I talk with without judgment about a safer next step, such as a doctor, counselor, or recovery group?'] },
  { id:'trauma', title:'Finding the present moment', gentle:'You are in charge of this page. There is no need to revisit or describe anything painful.', prompts:['Name three things you can see, two things you can feel, and one sound you can hear. What tells you that you are here, now?','Without explaining why, what helps your body feel a little more settled: light, fresh air, a familiar object, space, or someone safe?','What boundary or support would feel protective for you today?'] },
  { id:'ptsd', title:'Living with PTSD', gentle:'Go slowly. You never need to write down traumatic details. Pause and orient to the present if this becomes overwhelming.', prompts:['What helps me notice that a difficult memory or alarm response is happening, without judging myself for it?','What are a few safe, present-day details I can name: today’s date, where I am, or someone I can contact?','What would I like a trusted person to understand about how to support me?','What professional or community support could I reach out to when I feel ready?'] },
  { id:'cptsd', title:'Living with complex trauma', gentle:'Healing is not a deadline. You can skip any question, keep answers brief, or close this page.', prompts:['What helps me feel respected and in control in a conversation or relationship?','What signals tell me I might need a pause, more space, or support?','What does a small boundary sound like in my own words?','What qualities do I value in myself that exist beyond what I have been through?'] },
  { id:'grief', title:'Making space for grief', gentle:'There is no correct pace for grief, and no need to make it neat.', prompts:['What do I miss most today? What memory or small detail is with me?','What has changed in my day-to-day life that I wish others understood?','What might care look like for me in this particular moment?'] },
  { id:'guilt', title:'Working through guilt', gentle:'You can take responsibility and still treat yourself with care.', prompts:['What do I feel responsible for? What was in my control, and what was outside it?','Is there a repair I can make, or something I can learn for next time?','What would accountability look like without punishing myself forever?'] },
  { id:'self-worth', title:'Self-worth & kindness', gentle:'You don’t have to feel positive about yourself to begin with honesty.', prompts:['What do I criticize myself for most often? Where did I learn to speak to myself this way?','What would I say to a friend who was struggling with the same thing?','What is one quality, effort, or choice I can acknowledge in myself today?'] },
  { id:'overwhelm', title:'When everything is too much', gentle:'You don’t have to sort it all out at once. Just notice what is in front of you.', prompts:['What is taking up the most space in my mind right now?','Which part needs attention today, and which part can wait?','What is one next step small enough to do in ten minutes—or one thing I can set down?'] }
];

// Icon set: 24px grid, drawn with currentColor strokes so every icon shares one weight and style.
const ICONS = {
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h6"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 0 1-.7-8.95A6 6 0 0 1 18 9.5a4 4 0 0 1 .5 8.5z"/>',
  anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14"/><path d="M8.5 10.5h7"/><path d="M5 13a7 7 0 0 0 14 0"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 3l7 3v5.5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 16.5l9 4.5 9-4.5"/>',
  drop: '<path d="M12 3c3.5 4.6 6 7.6 6 10.5a6 6 0 0 1-12 0C6 10.6 8.5 7.6 12 3z"/>',
  scale: '<path d="M12 4v16"/><path d="M7 20h10"/><path d="M5 7h14"/><path d="M2 13a3 3 0 0 0 6 0L5 7z"/><path d="M16 13a3 3 0 0 0 6 0L19 7z"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7.5 2.3C19.5 15.4 12 20 12 20z"/>',
  list: '<path d="M10 6h10"/><path d="M10 12h10"/><path d="M10 18h10"/><circle cx="5" cy="6" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="5" cy="18" r="1"/>',
  leaf: '<path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14z"/><path d="M5 19l7-7"/>',
  check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
  chevron: '<path d="M9.5 6l6 6-6 6"/>',
  printer: '<path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="2"/><path d="M7 14h10v6.5H7z"/>',
  trash: '<path d="M4 7h16"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l1 12.5h9l1-12.5"/>'
};
const icon = (name, cls = '') =>
  '<svg class="ico ' + cls + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + ICONS[name] + '</svg>';

// Each workbook gets its own icon and a soft tone pair (background, foreground).
const META = {
  anxiety:      { icon: 'wind',   bg: '#e1ebe8', fg: '#3c6259' },
  'low-mood':   { icon: 'cloud',  bg: '#e3e9f2', fg: '#3e5878' },
  addiction:    { icon: 'anchor', bg: '#e8e5f2', fg: '#5b4b7e' },
  trauma:       { icon: 'eye',    bg: '#e4eee0', fg: '#466150' },
  ptsd:         { icon: 'shield', bg: '#f3e5da', fg: '#8a5a3c' },
  cptsd:        { icon: 'layers', bg: '#eeeadc', fg: '#6d6036' },
  grief:        { icon: 'drop',   bg: '#e4eaf2', fg: '#44597a' },
  guilt:        { icon: 'scale',  bg: '#f4e6d6', fg: '#8a6330' },
  'self-worth': { icon: 'heart',  bg: '#f5e2e2', fg: '#94474f' },
  overwhelm:    { icon: 'list',   bg: '#ebe8e2', fg: '#5a5752' }
};

const KEY = 'quiet-pages-notebook';
const topics = document.querySelector('#topic-list');
const page = document.querySelector('#workbook-page');
let notebook = {};
try { notebook = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { notebook = {}; }
let saveTimer = null;
let current = workbooks[0];

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(notebook)); return true; } catch (e) { return false; }
}

function setStatus(text, state = 'saved') {
  const status = page.querySelector('.save-state');
  if (!status) return;
  status.dataset.state = state;
  status.querySelector('.save-text').textContent = text;
}

function showWorkbook(id) {
  const book = workbooks.find(item => item.id === id) || workbooks[0];
  const meta = META[book.id];
  current = book;
  topics.querySelectorAll('button').forEach(button => {
    if (button.dataset.id === book.id) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  const answers = notebook[book.id] || [];
  const prompts = book.prompts.map((prompt, index) =>
    '<div class="prompt"><span class="prompt-number">' + (index + 1) + '</span><div><p>' + prompt + '</p>' +
    '<textarea class="answer" data-index="' + index + '" rows="3" aria-label="Answer to prompt ' + (index + 1) + '" placeholder="Write here, or skip">' +
    escapeHtml(answers[index] || '') + '</textarea></div></div>'
  ).join('');
  page.style.setProperty('--bg', meta.bg);
  page.style.setProperty('--fg', meta.fg);
  page.innerHTML =
    '<div class="page-head"><div class="head-main"><span class="head-icon">' + icon(meta.icon) + '</span>' +
    '<div><p class="page-kicker">Your notebook</p><h2>' + book.title + '</h2></div></div>' +
    '<span class="page-count">' + book.prompts.length + ' prompts</span></div>' +
    '<p class="gentle">' + book.gentle + '</p>' + prompts +
    '<div class="foot-row"><span class="save-state" data-state="saved" aria-live="polite">' + icon('check') +
    '<span class="save-text">Saved on this device</span></span>' +
    '<div class="tool-row">' +
    '<button class="tool" type="button" data-action="print">' + icon('printer') + '<span class="lbl">Print</span></button>' +
    '<button class="tool" type="button" data-action="clear">' + icon('trash') + '<span class="lbl">Clear answers</span></button>' +
    '</div></div>';
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

page.addEventListener('input', event => {
  const field = event.target;
  if (!field.classList.contains('answer')) return;
  const list = notebook[current.id] ? notebook[current.id].slice() : [];
  list[Number(field.dataset.index)] = field.value;
  notebook[current.id] = list;
  setStatus('Saving…', 'saving');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const ok = persist();
    setStatus(ok ? 'Saved on this device' : 'Could not save on this device', ok ? 'saved' : 'error');
  }, 400);
});

function fitAnswers() {
  page.querySelectorAll('.answer').forEach(field => {
    field.style.height = 'auto';
    field.style.height = field.scrollHeight + 'px';
  });
}

page.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.dataset.action === 'print') {
    fitAnswers();
    window.print();
  }
  if (button.dataset.action === 'clear') {
    const label = button.querySelector('.lbl');
    if (!button.dataset.armed) {
      button.dataset.armed = 'yes';
      button.classList.add('armed');
      label.textContent = 'Tap again to clear';
      setTimeout(() => {
        if (button.isConnected) {
          delete button.dataset.armed;
          button.classList.remove('armed');
          label.textContent = 'Clear answers';
        }
      }, 4000);
      return;
    }
    delete notebook[current.id];
    persist();
    showWorkbook(current.id);
  }
});

window.addEventListener('beforeprint', fitAnswers);

workbooks.forEach(book => {
  const meta = META[book.id];
  const button = document.createElement('button');
  button.className = 'topic';
  button.type = 'button';
  button.dataset.id = book.id;
  button.style.setProperty('--bg', meta.bg);
  button.style.setProperty('--fg', meta.fg);
  button.innerHTML =
    '<span class="tile">' + icon(meta.icon) + '</span>' +
    '<span class="topic-name">' + book.title.replace('When ', '') + '</span>' +
    icon('chevron', 'arrow');
  button.addEventListener('click', () => showWorkbook(book.id));
  topics.append(button);
});
showWorkbook('anxiety');
