# रचना

## काम

कोड जो दोबारा इस्तेमाल किया जा सकता है उसे एक ब्लॉक में wrap किया जाता है, जिसे हम रचना कहते है।

## इसका उपयोग कैसे करे?

।. एक रचना को डिफाइन करने के लिए
`रचना रचना-का-नाम (पर्याय1 ,पर्याय2 )`
रचना का नाम:
रचना का नाम केस सेंसिटिव होता है और उसमे सिर्फ अक्षरोंका (अल्फाबेट्स का) इस्तेमाल करना चाहिए।

रचना पर्याय:
रचना पर्याय का टेम्पररी वैल्यूज स्टोर करनेमे इस्तेमाल किया जा सकता है। जब किसी रचना को कॉल किया जाता है तभी ये वैल्यूज पास किये जाते है।

पर्याय के नाम भी केस सेंसिटिव होते है और ये आपकी चॉइस के हिसाब से चेंज किये जा सकते है। मगर इनमे सिर्फ अक्षरोंका अर्थात अल्फाबेट्स का इस्तेमाल करे।

2: रचना को कॉल करना ।
`रचना-का-नाम (पर्याय1 ,पर्याय2 )`
रचना का नाम - PrintFullName
जब आप रचना को कॉल करते है तभी इस बात का ध्यान जरूर रखना चाहिए की रचना का नाम और जब आप रचना को कॉल करते हो तबका नाम same होना चाहिए।
For e.g PrintFullName ≠ printfullname

## उदाहरण
वेरिएबल्स (Variables) को डिफाइन करे।
```
FirstName = 'Sachin'
LastName = 'Tendulkar'
```
रचना declaration
```
PrintFullName (x, y)
```
रचना Body
```
{
प्रिंट( x + y )
}
```
रचना call
```
PrintFullName(FirstName,LastName)
```
जब आप रचना को कॉल करते है तभी इस बात का ध्यान जरूर रखना चाहिए की रचना का नाम और जब आप रचना को कॉल करते हो तबका नाम same होना चाहिए।
For e.g PrintFullName≠printfullname

रचना पर्याय- ('Sachin','Tendulkar')
इस प्रोग्रामिंग भाषा के तहत निर्धारित ग्रामर के अनुसार, (x, y) ('Sachin','Tendulkar) बन जाएगा।

x will take a temporary value of 'Sachin'

y will take a temporary value of 'Tendulkar'

```
FirstName='Sachin'
LastName='Tendulkar'
NewFirstName='Sunil'
NewLastName='Chetri'

रचना PrintFullName(First,Last)

{
प्रिंट(First + Last)
}

PrintFullName(FirstName,LastName)

PrintFullName(NewFirstName,NewLastName)

Job='Doctor'
City='Pune'

रचना AboutMe(x,y)

{
प्रिंट("I am a" + x + "in" + y)
}
AboutMe(Job,City)

NumberOne=20
NumberTwo=40

रचना Add(a,b)
{
c=a+b
प्रिंट(c)
}
Add(NumberOne,NumberTwo)
```