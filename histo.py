from flask import Flask, flash, redirect, url_for, render_template, request
import os

from werkzeug.utils import secure_filename

#папка для сохранения загруженных файлов
UPLOAD_FOLDER = './'

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'svs'}

#создаем экземпляр приложения
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/case')
def case():
    return render_template('case.html')


@app.route('/entry')
def entry():
    return render_template('entry.html')


@app.route('/cases')
def cases():
    return render_template('cases.html')


@app.route('/account')
def account():
    return render_template('account.html')


def allowed_file(filename):
    """ Функция проверки расширения файла """
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/case', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        """ проверим, передается ли в запросе файл """
        if 'file' not in request.files:
            """ После перенаправления на страницу загрузки """
            """ покажем сообщение пользователю """
            flash('Не могу прочитать файл')
            return redirect(request.url)
        file = request.files['file']
        # Если файл не выбран, то браузер может
        # отправить пустой файл
        if file.filename == '':
            flash('Нет выбранного файла')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            """ безопасно извлекаем оригинальное имя файла """
            filename = secure_filename(file.filename)
            # сохраняем файл
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            # если все прошло успешно, то перенаправляем
            # на функцию-представление 'download_file'
            # для скачивания файла
            return redirect(url_for('upload_file', name=filename))



if __name__ == '__main__':
    app.run(debug=True)



