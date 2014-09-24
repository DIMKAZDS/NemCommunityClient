﻿define({
	id: 'bg',
	name: 'Български',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
            101: 'Файлът не е намерен',
            102: 'Портфейлът не е създаден.',
            103: 'Файлът на портфела е повреден.Моля възстановете файла от копие което сте запазили при създаването на портфейла или създайте нов акаунт.',
            104: 'Въведената парола е грешна. Опитайте се да си спомните правилната парола. Паролата не може да бъде въстановена ако е загубена',
            106: 'Преди да започнете работа с портфейла се убедете че той е отворен. За да получите достъп до портфейла въведете паролата за този портфейл.',
            107: 'Портфейла не съдържа този акаунт.',
            108: 'Акаунта не може да бъде премахнат. По всяка вероятност това е така защото акаунта има баланс повече от 0 NEM или акаунта ,който се опитвате да премахнете е главен акаунт. ',
            109: 'Друг портфейл със същото име вече съществува. Моля  изберете друго име на портфейла.',
            110: 'Портфейла вече съдържа този акаунт.',
            202: 'Криптирано съобщение не може да бъде изпратено понеже получателя до сега не е извършил нито една транзакция и няма публичен ключ.',
            305: 'NEM Infrastructure Server е недостъпен',
            306: 'Възникна непредвидена грешка.Извиняваме се за това ,опитайте отново може това да помогне.В противен случай се обърнете за помощ към NEM NIS/NCC community.',
            400: 'Някой параметри липсват или са некоректни.',
            404: 'Търсеният ресурс не може да бъде намерен.',
            500: 'Грешка при съхранение на конфигурационния файл.',
            600: 'За получаване и изпращане на транзакции NCC изисква NIS сървъра да бъде рестартиран.Моля използвайте менюто на NCC за рестартиране в локалния възел.',
            601: 'NIS възела е вече стартиран.Повторен опит за рестартиране на NIS възела е невъзможен.',
            700: 'Предоставения акаунт не удовлетворява основните критерии за генерация.Основно това е свързано с количеството NEM в сметката.Генерацията започва поне с 1000 NEM в баланса.',
            701: 'Предоставеният срок е в миналото. Срокът трябва да бъде предоставен в рамките на 1-дневен период.',
            702: 'Предоставеният срок е твърде далеч в бъдещето. Срокът трябва да бъде в рамките на еднодневен период от време.',
            703: 'Вашия акаунт не съдържа достатъчно количество средства изпращане на исканната сума NEMs.',
            704: 'Предоставеното съобщение е прекалено голямо за да бъде изпратено чрез NEM.Моля опитайте да съкратите дължината на съобщението ,което искате да изпратите.',
            705: 'Транзакцията вече съществува в базата данни или в листа на непотвърдените транзакции.',
            706: 'Подписът на сделката не може да бъде проверен.',
            707: 'Времевата отметка на ID на трансакцията е много далеч в миналото.',
            708: 'Времевата отметка на транзакцията е много далеч в бъдещето.',
            709: 'Неизвестен акаунт. Акаунта трябва да е част от поне една транзакция (входяща или изходяща) за да бъде разпознат от мрежата.The account is unknown. An account needs to be part of at least one transaction (sender or recipient) to be known to the network.',
            901: 'Възникна грешка при преминаване в режим офлайн.'
        },
        common: {
        	success: 'Успешно', //title of the Success message modals
        	nisStatus: {
        		nccUnavailable: 'NCC е недостъпен',
        		unavailable: 'NIS е недостъпен',
        		notBooted: 'NIS трябва да бъде презареден. Моля отворете портфейла и презаредете локалния възел чрез изплуващия прозорец.',
        		retrievingStatus: 'Retrieving NIS status...',
        		synchronizing: 'NIS се синхронизира. В блок {{1}}, около {{2}} назад.',
        		daysBehind: {
        			0: 'по малко от 1 ден',
        			1: '1 ден',
        			many: '{{1}} дни'
        		},
        		synchronized: 'NIS is synchronized!'
        	}
        },
		modals: {
			error: {
				title: 'Oops!',
				caption: 'Грешка {{1}}'
			},
			confirmDefault: {
				yes: 'Да',
				no: 'Не'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: [
						{
							value: 'http', // please dont't change
							display: 'HTTP'
						},
						{
							value: 'https', // please dont't change
							display: 'HTTPS'
						}
					],
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			sendNem: {
				title: 'Изпрати NEM',
				labelDesc: 'Този акаунт е маркиран като {{1}}',
				nullLabelDesc:"Този акаунт не е маркиран",
				amount: 'Сума',
				recipient: "Акаунт на Получателя",
				message: 'Съобщение',
				encrypt: 'Криптирано съобщение',
				fee: 'Такса',
				dueBy: 'Дължима от',
				resetFee: 'Фиксиране на минимална такса',
				hours: 'Часове',
				password: 'Парола',
				send: 'Изпрати',
				sending: 'Изпращам...',
				successMessage: 'Транзакцията беше изпратена успешно!'
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Притежател на подписа',
				remoteServer: 'Отдалечен сървър',
				local: 'Локален',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Синхронизиран',
				notSync: 'Не синхронизиран',
				notConnected: 'Не съединен с NEM облака',
				loading: 'Зареждане...'
			},
			transactionDetails: {
				title: 'Детайли на транзакцията',
				// this might be block or transaction ID
				id: 'ID',
				// this might be block or transaction Hash
				hash: 'Hash',
				type: 'Тип на транзакцията',
				pending: 'В очакване',
				outgoing: 'Изходящи',
				incoming: 'Входящи',
				self: 'Самостоятелна',
				sender: 'Изпращач',
				recipient: 'Получател',
				message: 'Съобщение',
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				time: 'Време на създаване',
				confirmations: 'Потвърждения',
				amount: 'Сума',
				fee: 'Такса'
			},
			bootLocalNode: {
				title: 'Стартирайте локалния възел.',
				account: 'Акаунт за стартиране на локалния възел.',
				noLabel: '<span class="null">&lt;Не маркиран&gt;</span>',
				wallet: 'Портфейл',
				node: 'Име на локалния възел',
				boot: 'Старт',
				booting: 'Стартиране...'
			},
			notBootedWarning: {
				title: 'Локалният възел не можа да се стартира!',
				message: 'Локалният възел трябва да бъде стартиран преди да можете да изпращате NEM!'
			},
			closeWallet: {
				title: 'Затваряне на портфейла',
				message: 'Сигурни ли сте че искате да затворите портфейла и да се върнете на главната страница?'
			},
			createAccount: {
				title: 'Създайте нов акаунт',
				label: 'Частна маркировка',
				wallet: 'Портфейл',
				password: "Парола на портфейла",
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше създаден!',
				create: 'Създай'
			},
			addAccount: {
				title: 'Добавете съществуващ акаунт',
				privateKey: "Частен ключ на акаунта",
				wallet: 'Портфейл',
				password: "Парола на портфейла",
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше добавен към портфейла!',
				add: 'Добави',
				label: 'Маркировка'
			},
			setPrimary: {
				title: 'Задаване като главен акаунт',
				account: 'Задайте като главен акаунт',
				noLabel: '<span class="null">&lt;Без маркировка&gt;</span>',
				wallet: 'Портфейл',
				password: "Парола на портфейла",
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше зададен като главен!',
				set: 'Задай като главен',
			},
			changeWalletName: {
				title: 'Сменете името на портфейла',
				wallet: 'Настоящо име на портфейла',
				newName: 'Ново име на портфейла',
				password: "Парола на портфейла",
				successMessage: 'Името на портфейла е успешно сменено от <em>{{1}}</em> на <em>{{2}}</em>',
				change: 'Смени'
			},
			changeWalletPassword: {
				title: 'Сменете паролата на портфейла',
				wallet: 'Портфейл',
				password: 'Текуща парола',
				newPassword: 'Нова парола',
				confirmPassword: 'Повторете новата парола',
				successMessage: 'Паролата на портфейла беше успешно сменена',
				change: 'Смени',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Въведената от вас парола и потвърдената парола не съвпадат.Моля убедете се ,че правилно сте написали новата парола.'
			},
			changeAccountLabel: {
				title: 'Сменете маркировката на акаунта',
				label: 'Маркировка на акаунта',
				wallet: 'Портфейл',
				password: "Парола на портфейла",
				successMessage: 'Акаунтът {{1}} сега е маркиран като {{2}}',
				change: 'Смени'
			},
			removeAccount: {
				title: 'Премахнете акаунта',
				wallet: 'Портфейл',
				password: "Парола на портфейла",
				warning: 'Моля уверете се че нямате NEM монети в акаунта преди да го премахнете иначе те ще бъдат изгубени завинаги.',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше премахнат!',
				remove: 'Премахни'
			},
			nisUnavailable: {
				title: 'NIS е недостъпен',
				message: 'NIS е прекъснат,очакване на включване'
			},
			shutdown: {
				title: 'Затворете програмата',
				message: 'Сигурни ли сте че искате да затворити NEM Community Client?'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Портфейлът беше успешно импортнат!',
			nav: {
				start: 'Първи стъпки',
				about: 'Относно NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Нов за <em>NEM</em>?',
				leftButton: 'Създай нов портфейл',
				walletNamePlh: 'Име на вашия портфейл',
				passwordPlh: 'Парола',
				create: 'Създай',
				rightTitle: 'Вече сте <em>NEM</em>ber?',
				rightButton: 'Отворете вашия портфейл',
				openButton: 'Отвори',
				walletsFound: 'Намерени <strong>{{1}}</strong> <em>Портфейли</em>',
				copyright: 'Фотография от <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC криптира твоя портфейл',
						description: '<em>Сигурността</em> е най важната задача за NEM състояща се в защита на вашите NEM монети и активи.'
					},
					{
						title: 'NCC криптира твоя портфейл',
						description: '<em>Сигурността</em> е най важната задача за NEM състояща се в защита на вашите NEM монети и активи.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Как работи NCC?',
						paragraphs: [
							'<strong>NCC</strong> предоставя достъп до вашите активи и NEM монети като обикновен портфейл.Вие можете',
							'<strong>NCC</strong> изисква достъп до <strong>NIS</strong> сървър за да може да работи.Локалния сървър трябва да е активен(той се инсталира заедно <strong>NCC</strong>)',
							'Вие също може да конфигурирате достъп до отдалечен <strong>NIS</strong>.'
						],
						listItems: [
							'Да имате няколко портфейла',
							'Да дефинирате няколко акаунта да се съдържат в един портфейл.'
						]
					},
					{
						title: 'Какво е &#42;NIS?',
						paragraphs: [
							'Този компонент отговаря за функционирането на <strong>NEM</strong> облака.',
							'Колкото повече <strong>NIS</strong> толкова по добра е сигурността.',
							'<strong>NIS</strong> това е точката за достъп за <strong>NEM</strong> облака.'
						],
						legend: '<strong>&#42;NIS</strong> се разшифрова <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.Всички права запазени'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Около {{1}} дни назад',
			lastAccessJustNow: 'Точно сега',
			lastAccessTooltip: 'Последният достъп е бил {{1}}',
			primary: 'Главен',
			primaryShort: 'Г',
			noLabel: '<Без маркировка>',
			copiedToClipboard: 'Адресът беше копиран в клипборда!',
			actions: {
				refreshInfo: 'Обновяване на информацията',
				bootLocalNode: 'Стартиране на локалния възел',
				changeWalletName: 'Промяна името на портфейла',
				changeWalletPassword: 'Промяна паролата на портфейла',
				mergeWallets: 'Обединяване на портфейли',
				exportWallet: 'Експорт на портфейла',
				createAccount: 'Създаване на нов акаунт',
				addAccount: 'Добавяне на съществуващ акаунт',
				changeAccountLabel: 'Промяна на маркировката на акаунта',
				setPrimary: 'Задай като главен акаунт',
				removeAccount: 'Премахни акаунта',
				clientInfo: 'Информация за клиента',
				closeWallet: 'Затвори портфейла',
				closeProgram: 'Затвори програмата',
				copyClipboard: 'Копирай адреса в клипборда'
			},
			nav: [
				'Панел за управление',
				'Съобщения',
				'Контакти',
				'Транзакции',
				'Генерирани блокове',
			 	'Обмен на активи',
				'Новини',
				'Приложения',
				'Акаунти',
				'Настройки',
				'Затворете програмата'
			],
			bootNodeWarning: "За пълното функциониране на NCC е нужно локалният възел да се рестартира."
		},
		dashboard: {
			assets: {
				title: 'Вашите активи'
			},
			importance: {
				title: 'Важен резултат',
				unknown: 'Неизвестен статус',
				start: 'Старт на генерирането',
				harvesting: 'Генериране',
				stop: 'Стоп на генерирането',
				description: 'Важност на акаунта за NEM облака'
			},
			transactions: {
				title: 'Скорошни транзакции',
				sendNem: 'Изпрати NEM',
				balance: 'Текущ баланс',
				syncStatus: '( Блок {{1}}{{#2}} : около {{3}} дена на зад {{/2}})',
				unknown: 'неизвестно',
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				types: {
					pending: 'Чакащи транзакции',
					outgoing: 'Изходящи транзакции',
					incoming: 'Входящи транзакции',
					self: 'Самостоятелни транзакции',
				},
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				pending: 'В очакване',
				seeAll: 'Виж всички транзакции',
				noTransactions: 'Не е направена нито една транзакция все още'
			},
			nemValue: {
				title: 'NEM статистически стойности'
			},
			messages: {
				titleTooltip: 'Съобщения'
			},
			news: {
				titleTooltip: 'Новини'
			},
			notAvailable: 'Недостъпно в алфа версията'
		},
		transactions: {
			title: 'Транзакции',
			sendNem: 'Изпрати NEM',
			balance: 'Текущ баланс',
			filters: {
				confirmed: 'Потвърдени',
				unconfirmed: 'Непотвърдени',
				incoming: 'Входящи',
				outgoing: 'Изходящи',
			},
			table: {
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				types: {
					pending: 'Чакащи транзакции',
					outgoing: 'Изходящи транзакции',
					incoming: 'Входящи транзакции',
					self: 'Самостоятелни транзакции',
				},
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				pending: 'В очакване',
				noTransactions: 'Не е направена нито една транзакция все още',
				loading: 'Зареждане на още транзакции...'
			}
		},
		harvestedBlocks: {
			title: 'Генерирани блокове',
			feeEarned: 'Такси събрани от последните 25 генерирани блока',
			table: {
				columns: [
					'Височина',
					'Време',
					'Блок hash',
					'Такса'
				],
				noBlocks: 'Няма генерирани блокове ',
				loadMore: 'Виж старите генерирани блокове'
			},
			harvesting: {
				unknown: 'Неизвестен статус',
				start: 'Старт на генерирането ',
				harvesting: 'Генериране',
				stop: 'Стоп на генерирането'
			}
		},
		settings: {
			title: 'Настройки',
			settings: [
				{
					name: 'Език'
				}
			],
			save: 'Запази промените',
			saveSuccess: 'Настройките бяха успешно запазени'
		}
	}
});
