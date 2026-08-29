/** Inline script — runs before paint to avoid a light/dark flash. */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("phc-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark");}else{document.documentElement.setAttribute("data-theme","light");}}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
