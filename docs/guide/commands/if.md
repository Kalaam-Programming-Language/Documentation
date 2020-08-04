# अगर()

## काम

एक Certain Conditionके तहत कोड Execution को Allow करता है। इसमें २ Conditions होती है | 1.True 2.False

## इसका उपयोग कैसे करे?

१ . Single Condition को मूल्यांकन (Evaluate) करना।

```
अगर (Language == 'kalam')
अगर (Age > 18)
```

स्वीकृत Comparion operators नीचे दिए गए है :

`> - Greater than`

`< - Less than`

`== - is Equal to`

`!= - is Not Equal to`

२: Multiple Conditions को मूल्यांकन (Evaluate) करना।

```
अगर (Age > 16 && Education == 'ssc')
अगर (Country=='india' || Language == 'hindi')
```

स्वीकृत comparison Operators नीचे दिए गए है:

&& - अगर दोनों Conditions सत्य हो तो उसे True समझा जाता है।

|| - अगर एक Condition सत्य हो तो True समझा जाता है।

## उदाहरण 

उदाहरण 1
```
इनपुट(language)

अगर(language=='kalam')

{

प्रिंट('Alright, that's cool!')

}
```

उदाहरण 2

```
इनपुट(language)
इनपुट(country)

अगर(language=='kalam' || country=='india')
{

प्रिंट('That works too.')

}
```