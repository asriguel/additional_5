module.exports = function check(str, bracketsConfig) {
  let prev = "";
  while (str.length != prev.length)
  {
      prev = str;
      for(let i = 0; i < bracketsConfig.length; i++)  {
        str = str
          .replace(bracketsConfig[i].join(''), '');
      }
                        
  }
  return (str.length == 0);
}