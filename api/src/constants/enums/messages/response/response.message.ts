// RESPONSES MESSAGES
export enum resMsg {

    // CONFIG MESSAGES API - NO MODIFICAR
    API_DESCRIPTION='API - System Admin',
    API_DETAIL='Administrador Principal. Desarrollado en NESTJS',
    
    // MESSAGES SERVICE API
    SERVICE_ACTIVE='El servicio esta disponible!',
    SERVICE_INACTIVE='El servicio no se encuentra disponible!',
    
    // MESSAGES AUTHORIZED
    AUTHENTICATION='El usuario esta autenticado!',
    UNAUTHENTICATION='No estas autenticado!',
    UNAUTHENTICATION_NO_MATCH='El usuario o la contraseña no coinciden!',
    
    // MESSAGES AUTHORIZED
    AUTHORIZATION='El usuario esta autorizado!',
    UNAUTHORIZATION='El usuario NO esta autenticado!',
    
    //SUCCESS CRUD
    GET_SUCCESS='Consulta realizada correcatamente!',
    POST_SUCCESS='Se creo el registro correctamente!',
    PUT_SUCCESS='Se actualizo el registro correctamente!',
    DELETE_SUCCESS='Se elimino el registro correctamente!',
    
    //ERROR CRUD
    GET_ERROR='ERROR!.No se pudo realizar la consulta error de parametros',
    POST_ERROR='ERROR!. No se pudo crear el registro',
    PUT_ERROR='ERROR!. No se pudo actualizar el registro',
    DELETE_ERROR='ERROR!. No se pudo elimnar el registro',
    
    //EXCEPTION CRUD
    UNIQUE='ERROR!. El registro ya existe',
    NOTFOUND='ERROR!. No existen resgitros con los parametros solicitados',
    //export const POST_ERROR='ERROR!. No se pudo crear el registro'
    //export const PUT_ERROR='ERROR!. No se pudo actualizar el registro'
    //export const DELETE_ERROR='ERROR!. No se pudo elimnar el registro'
    
    //VALIDATIONS
    MSG_ERROR_COLUMN='ERROR!. Atributo: ',
    MSG_ERROR_MINLENGTH='-    ',
    MSG_ERROR_MAXLENGTH='ERROR!. La longitud  ',
    MSG_LENGTH='ERROR!. La longitud debe estar entre: ',

    // generic Messages exceptions
    EXCEPTION_BAD_REQUEST = 'La solicitud no se puede completar, existen errores de validación.',
    EXCEPTION_UNAUTHORIZED = 'Usuario no autorizado',
    EXCEPTION_FORBIDDEN = 'No tienes permisos para realizar la acción sobre el recurso solicitado.',
    EXCEPTION_NOT_FOUND = 'Recurso no encontrado',
    EXCEPTION_PRECONDITION_FAILED = 'La solicitud no cumple una condición previa.',
    EXCEPTION_DEFAULT = 'Ocurrio un error desconocido',
    EXCEPTION_REFRESH_TOKEN_NOT_FOUND = 'Sesión finalizada.',
    EXCEPTION_REFRESH_TOKEN_EXPIRED = 'Sesión expirada por inactividad.',

    // generic messages success
    SUCCESS_DEFAULT = 'ok',
    SUCCESS_LIST = 'Registro(s) obtenido(s) con exito!',
    SUCCESS_CREATE = 'Registro creado con exito!',
    SUCCESS_UPDATE = 'Registro actualizado con exito!',
    SUCCESS_DELETE = 'Registro eliminado con exito!',

    // business logic messages
    SUCCESS_RESTART_PASSWORD = 'Restauración de contraseña exitosa!!!',
    SUCCESS_ACCOUNT_UNLOCK = 'Cuenta desbloqueada exitosamente.',
    INVALID_USER_CREDENTIALS = 'Usuario o contraseña invalidos.',
    INVALID_USER = 'El usuario no existe o no contiene un estado valido.',
    INVALID_CREDENTIALS = 'Credenciales incorrectas!!!',
    INACTIVE_USER = 'El usuario se encuentra INACTIVO',
    INVALID_PASSWORD_SCORE = 'La contraseña nueva no cumple el nivel de seguridad necesario.',
    USER_BLOCKED = 'Usuario bloqueado por muchos intentos de sesión fallidos, revise su correo electrónico.',
    SUBJECT_EMAIL_ACCOUNT_ACTIVE = 'Generación de credenciales.',
    SUBJECT_EMAIL_ACCOUNT_RESET = 'Restauración de contraseña.',
    SUBJECT_EMAIL_ACCOUNT_LOCKED = 'Bloqueo de cuenta temporal.',
    EXISTING_USER = 'Ya existe un usuario registrado con el mismo número de documento.',
    EXISTING_EMAIL = 'Ya existe un usuario registrado con el mismo correo electrónico.',
}