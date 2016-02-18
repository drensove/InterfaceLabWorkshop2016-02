int ledpin = 13;

void setup() {
  Serial.begin(9600);
  // put your setup code here, to run once:
  pinMode(ledpin,OUTPUT);

}

void loop() 
{
  // put your main code here, to run repeatedly:

 if(Serial.available() > 0)
  {
  int value = Serial.read();
    if (value == '1') 
      {
      digitalWrite(ledpin,HIGH);
      }
    if (value == '0') 
    {
      digitalWrite(ledpin, LOW);
     }
  }
  
 }
//  LED blinkt.
//  digitalWrite(ledpin, HIGH);
//  Serial.println("Hello I'm HIGH");
//  delay(1000);
//  //1sec. on- warten
//  
//  digitalWrite(ledpin, LOW);
//  Serial.println("Now I'm low");
//  delay(1000);
//  //1sec. off- warten



