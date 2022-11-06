/*
void send_event(const char *event)
{
  Serial.print("Connecting to "); 
  Serial.println(host);
    // Use WiFiClient class to create TCP connections
  WiFiClient client;
  const int httpPort = 80;
  if (!client.connect(host, httpPort)) {
    Serial.println("Connection failed");
    return;
  }
    // We now create a URI for the request
  String url = "/trigger/";
  url += event;
  url += "/with/key/";
  url += privateKey;
  Serial.print("Requesting URL: ");
  Serial.println(url);
  // This will send the request to the server
  client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
  while(client.connected())
  {
    if(client.available())
    {
      String line = client.readStringUntil('\r');
      Serial.print(line);
    } else {
      // No data yet, wait a bit
      delay(50);
    };
  }
  Serial.println();
  Serial.println("closing connection");
  client.stop();
}
*/

const thebutton = document.getElementById("thebutton");
const log = document.getElementById("log");

thebutton.addEventListener('click', () => {

    // let proxy = "https://cors-anywhere.herokuapp.com/"
    let proxy = "http://www.whateverorigin.org/get?url=";
    let host = proxy + "https://maker.ifttt.com"
    
    let url = host + "/trigger/";
    url += "fall_detected";
    url += "/with/key/";
    url += "bKxsA_IOvOb4kTjGPwyLbw";
    
    fetch(url, {
        method: 'POST'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        log.innerText = data;
      });

})