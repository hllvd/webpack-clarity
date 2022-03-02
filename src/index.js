import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import '@cds/core/badge/register.js';
import '@cds/core/card/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/divider/register.js';
import '@cds/core/input/register.js';
import '@cds/core/progress-circle/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/search/register.js';
import '@cds/core/toggle/register.js';
import '@cds/core/icon/register.js';
import './index.css';

const button = document.querySelector('cds-button');
const alertGroup = document.querySelector('cds-alert-group');
const alert = document.querySelector('cds-alert');

button.addEventListener('click', () => {
  alertGroup.removeAttribute('hidden');
});

alert.addEventListener('closeChange', () => {
  alertGroup.setAttribute('hidden', '');
});
