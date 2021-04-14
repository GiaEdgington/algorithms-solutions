function topThreeWords(text) {
  
    const topWords = text
     .toLowerCase()
     .replace(/[^\w\s']/g, '')
     .split(/\s+/)
     .filter(w => w)
     .filter(w => w !== "'")
     .reduce((acc, v) => {
       acc[v] = (acc[v] || 0) + 1
       return acc
     }, {})
 
   return Object.entries(topWords)
     .sort((a,b) => b[1] - a[1])
     .map(c => c[0])
     .slice(0,3)
 }