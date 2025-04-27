// Task 01
// Пример из реального фреймворка
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm (не применяйте конструктор), который реализует свойства и методы абстрактного класса. Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false, в остальных случаях - true. Значений свойств по умолчанию - пустые строки. 

abstract class SignupFormAbstract {
    public abstract username: string;
    public abstract email: string;
    public abstract password: string;

    public abstract validatePassword(password: string): boolean;
}

// Тут создаете класс SignupForm
class SignupForm extends SignupFormAbstract{
    public username: string = '';
    public email: string = '';
    public password: string = '';

    public validatePassword(password: string): boolean {
        
         return password.trim().length >= 8;
    }
}
// const form = new SignupForm();
// form.username = 'user123';
// form.email = 'user@example.com';
// form.password = '  secret12  ';

// console.log(form.validatePassword(form.password)); 
// console.log(form.validatePassword(' sho'));   
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// Task 02
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm_02, который реализуем свойства и методы абстрактного класса. Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины. Если длина меньше 8 символов, возвращайте false, в остальных случаях - true. Значений свойств по умолчанию - пустые строки. Реализуйте в классе конструктор, который задает значения username, email, password при создании объекта. 

class SignupForm_02 extends SignupFormAbstract{
    public username: string = '';
    public email: string = '';
    public password: string = '';
    
    constructor(username:string, email: string, password: string){
        super();
       this.username = username;
       this.email = email;
       this.password = password;
    }
    
    public validatePassword(password: string): boolean {
        
        return password.trim().length > 8;
   }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// console.log(new SignupForm_02('abba', 'abba@email.ua', '234'));


// Пример из реального фреймворка
// Создайте абстрактный класс CF. Класс содержит абстрактные поля name, email, subject, body, verifyCode все string, и абстрактный метод sendEmail, который принимает аргумент email, тип метода boolean. 
 
 abstract class CF {
    public abstract name : string;
    public abstract email: string;
    public abstract subject:string;
    public abstract body: string;
    public abstract verifyCode:string;

    public abstract sendEmail(email:string):boolean;
 }


// Task 04
// Создайте класс ContactForm на основе класса CF. Свойства реализуйте как пустые строки, добавьте класс конструктор, который позволяет заполнить свойства name, email, subject, body, verifyCode при создании объекта. Метод sendEmail, реализуйте как функцию, возвращающую true.

class ContactForm extends CF{
    public name: string = '';
    public email: string = '';
    public subject: string = '';
    public body: string = '';
    public verifyCode: string = '';

    constructor (name: string, email: string, subject: string, body: string,verifyCode: string){
        super();
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.body = body;
        this.verifyCode = verifyCode;
    }
        public sendEmail(email:string): boolean { 
             return true;
        }

}
// const obj = new ContactForm('mike','adfadfa@gmail.com','learn','body','546498745');
// console.log(obj.verifyCode);

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.

// Task 05
// Пример из реального фреймворка
// Создайте абстрактный класс User, который содержит абстрактные свойства id - number, username - string, email - string, status - number. Напишите абстрактный метод findByUsername, который принимает имя пользователя - username, и возвращает id пользователя или false.

abstract class User{
    public abstract id: number;
    public abstract username: string;
    public abstract email:string;
    public abstract status: number;

    public abstract findByUsername(username:string): number |false ;
}

// Task 06
// Создайте на основе абстрактного класса User класс Client, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Метод должен возвращать 0. Не применяйте конструктор.

class Client extends User{
    public id : number = 0;
    public username: string = '';
    public email: string = '';
    public status: number = 0;
     
    public findByUsername(username: string): number | false {
        return 0;
    }
}
// const obj = new Client();
// console.log(obj);

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.



// Task 07
// Пример из реального фреймворка
// Реализуйте абстрактный класс ArticleInstance содержащий абстрактные свойства:
// number article_id
// number author_id
// string language
// number created
// number updated
// string published
// number hits_count
// string intro_text
// string full_text
// string title
// string meta_keywords
// string meta_description
// Добавьте два readonly свойства общие для всех классов наследников PUBLISHED_YES = 'Yes', PUBLISHED_NO = 'No';

abstract class ArticleInstance{
     readonly PUBLISHED_YES: string = 'Yes';
     readonly PUBLISHED_NO: string = 'No';

    
     
  public abstract article_id: number;
  public abstract author_id: number;
  public abstract language: string;
  public abstract created: number;
  public abstract updated: number;
  public abstract published: string;
  public abstract hits_count: number;
  public abstract intro_text: string;
  public abstract full_text: string;
  public abstract title: string;
  public abstract meta_keywords: string;
  public abstract meta_description: string;
}

// Task 08
// Создайте на основе абстрактного класса ArticleInstance класс Article, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Не применяйте конструктор.

// Тут создаете класс Article
class Article extends ArticleInstance{
    readonly PUBLISHED_YES: string = 'Yes';
    readonly PUBLISHED_NO: string = 'No';

    public  article_id: number = 0;
    public  author_id: number = 0; 
    public  language: string = '';
    public  created: number = 0;
    public  updated: number = 0;
    public  published: string = '';
    public  hits_count: number = 0;
    public  intro_text: string = '';
    public  full_text: string = '';
    public  title: string = '';
    public  meta_keywords: string = '';
    public  meta_description: string = '';
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.


// Task 09
// Пример из реального фреймворка
// Создайте абстрактный класс BundleCSS, содержащий абстрактные свойства: 
// sourcePath - строка
// basePath - строка
// baseUrl - строка 
// depends - массив строк 
// сssOptions - массив строк
// Добавьте абстрактный метод init, void.
// Добавьте абстрактный метод publish, void.

// Тут создаете класс BundleCSS

// Task 10
// Создайте на базе BundleCSS класс CssBundle, реализуйте свойства и методы. Задайте начальные значения для строк и массивов (пустые строки, пустые массивы). Не применяйте конструктор.

// Тут создаете класс CssBundle

// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.