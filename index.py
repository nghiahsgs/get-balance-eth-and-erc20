import requests
import re
import io
import bs4

def hamWriteFile(filePath, ndung):
    f=io.open(filePath,'w',encoding='utf-8')
    f.write(ndung)
    f.close()
headers={
    "user-agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
}
res=requests.get('https://etherscan.io/address/0xc94770007dda54cF92009BFF0dE90c06F603a09f',headers=headers)
data=res.text
hamWriteFile('code.html', data)




regex1=re.compile(r'Balance:<\/div>\n<div class="col-md-8">(.*?)Ether')
kq=regex1.search(data)
if kq=='':
    print('fail')
balance_eth=kq.group(1)
balance_eth=balance_eth.replace('<b>','').replace('</b>','')
print(balance_eth+' ETH')


soup = bs4.BeautifulSoup(data, 'html.parser')
eles=soup.select('.list-amount')

for ele in eles:
	print(ele.get_text())