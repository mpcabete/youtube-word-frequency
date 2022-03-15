console.log( Math.PI )
async function main () {
  const div = document.getElementById('plot')

  const csv = await (await fetch('data.csv')).text()
  const title = await (await fetch('title.txt')).text()
  console.log('title',title)
  const data = csv
    .trim()
    .split('\n')
    .map(x=>x.trim().split(' '))
    .filter(entry=>entry[1].length>=5)
    .slice(0,30)
  const y = data.map(d=>d[0])
  const x = data.map(d=>d[1])

  console.log('data',data)
  var layout = {
    title: {
      text:title,
      href:'test',
      font: {
        family: 'Courier New, monospace',
        size: 24
      }
    }
  }
  Plotly.newPlot(div, [{x,y,type:'bar'}], layout);
  console.log('Plotly',Plotly)
}
main()
