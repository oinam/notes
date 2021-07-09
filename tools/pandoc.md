# Pandoc

> [Pandoc](https://pandoc.org) is a free and open-source document converter, widely used as a writing tool and as a basis for publishing workflows. It was created by [John MacFarlane](https://johnmacfarlane.net), a philosophy professor at the University of California, Berkeley.

## References

- [Customizing Pandoc to Generate Beautiful PDF and ePub from Markdown](https://learnbyexample.github.io/customizing-pandoc/)
- [A Pandoc LaTeX template - Markdown to PDF or LaTeX](https://github.com/Wandmalfarbe/pandoc-latex-template)
- [Automona Blog](https://dave.autonoma.ca/blog/)

## Commands

*Markdown to HTML with CSS*

`pandoc -s -f markdown -t html5 -o output.html input.md -c style.css`

*batch process Markdown to HTML*

`find . -name \*.md -type f -exec pandoc -o {}.txt {} \;`