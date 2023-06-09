# kanban-board-project

Этапы и требования
Развернуть React-приложение с использованием create-react-app.
Следуя правилам компонентного подхода, разбить Канбан-доску на смысловые блоки, сверстать интерфейс.
Реализовать функционал
Исходное состояние
Исходная Канбан-доска должна иметь 4 блока с задачами:

Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);
Ready (задачи, которые могут быть взяты в работу);
In progress (задачи, которые уже в работе);
Finished (законченные задачи).
1. Алгоритм добавления задачи:
Нажали кнопку «+ Add card» → появилось поле для редактирования → ввели название → нажали кнопку «Submit» — задача появилась в бэклоге (при условии, что название введено).

2. Перемещение задач между списками
Задачи для списка Ready берутся из Backlog. При клике на «+ Add card» в карточке Ready, в конце списка появляется дропдаун с задачами из списка Backlog. После клика на задачу из дропдауна она должна появиться в списке Ready последней, при этом эта задача должна быть удалена из Backlog.

3. Сохранение внесенных изменений
Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), должны сохраняться в localStorage.

4. Детальная страница задачи
Добавьте возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.

5. Вывод количества задач в футер
В футере должно быть выведено количество активных и завершенных задач.

Active tasks — отображает количество задач в списке Backlog.
Finished tasks — отображает количество задач в списке Finished.
6. Выпадающее меню пользователя
Реализуйте выпадающий список, который будет появляться при клике на блок в правом верхнем углу страницы — аватар пользователя со стрелкой.

Стрелочка рядом с аватаром должна смотреть вверх, когда меню открыто, и вниз, когда меню закрыто.

При клике на пункты меню ничего не происходит, но нужно добавить выделение пунктов при наведении курсора (например, поменять цвет текста или добавить подчеркивание).
