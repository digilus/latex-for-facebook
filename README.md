# Latex for Facebook
Any TeX input between `$ ` and ` $` on Facebook gets rendered.
Firefox version, forked from gmunkhbaatarmn's Chrome version.

### How to use
Simply write `$` to before and after your LaTeX code.

Inline equation written between single `$`. Display style equations between double dollars (`$$ ` to ` $$`).

Examples:
- In mathematical terms, the sequence `$ F_n $` of Fibonacci numbers...
- Quadratic formula: `$ ax^2+bx+c=0 $`
- Solution of quadratic equation:
  `$$ x=\frac{-b\pm\sqrt{b^2-4ac\ }}{2a} $$`

### NOTE:
- Works: `$ ax^2+bx+c=0 $`
- Doesn't work: `$ax^2+bx+c=0$` <-- (Needs spaces between `$` signs and actual equation)

### How to run/build xpi
1. Get the [Firefox add-on SDK](https://developer.mozilla.org/en/Add-ons/SDK "Firefox Add-On SDK").
1. Clone the repository.
1. Get MathJax from [mathjax.org](http://docs.mathjax.org/en/latest/installation.html) - put in the "data" directory.
1. `cfx run` or `cfx xpi`

### CHANGES
- v 0.1 - Ported to Firefox, overcome content-security-policy by having MathJax bundled in. I couldn't get the CSP header rewrite thing to work.
