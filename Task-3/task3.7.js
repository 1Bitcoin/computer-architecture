let user = 
{
    firstUser: 
    {
      age: 
      {
        a2level: 
        {
            a3level:
            {              
                a4level: 100              
            }
        }
      }
    },
    testLevels: 
    {
      is2level: 
      {
          a2level: 
          {
              a3level: 100
          }
      }
    }
}
  
  let level = 0;
  var maxLevel = 0;

  var maxBranch = "";
  var currentBranch = "";
  
  function rec(user) 
  {    
    for (let key in user) 
    {
        currentBranch += " " + key;
      if (typeof (user[key]) == "object") 
      {
        level++;
        rec(user[key]);
      } 
      else 
      {
          if (level > maxLevel)
          {
              maxLevel = level;
              maxBranch = currentBranch;
          }
          currentBranch = ""
          level = 0
          console.log(key.toUpperCase())
      }
    }
  }
  
  rec(user);
  console.log(maxLevel)
  console.log(maxBranch)
