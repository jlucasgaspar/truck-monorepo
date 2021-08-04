import { validateBr } from 'js-brasil';
import { CelebrateError } from 'celebrate';

const makeError = (errString: string) => {
  throw new CelebrateError(errString, { celebrated: true });
}

export const validatePhone = (phone: any) => {
  const isValid = validateBr.telefone(phone);
  if (!isValid) makeError(`Telefone ${phone} é inválido.`);
}

export const validateCnpj = (cnpj: any) => {
  const isValid = validateBr.cnpj(cnpj);
  if (!isValid) makeError(`CNPJ ${cnpj} é inválido.`);
}

export const validateCpf = (cpf: any) => {
  const isValid = validateBr.cpf(cpf);
  if (!isValid) makeError(`CPF ${cpf} é inválido.`);
}

export const validateCnh = (cnh: string) => {
  const isValid = validateBr.cnh(cnh);
  if (!isValid) makeError(`CNH ${cnh} é inválida.`);
}

export const validateZipCode = (zipCode: string) => {
  const isValid = validateBr.cep(zipCode);
  if (!isValid) makeError(`CEP ${zipCode} é inválido.`);
}

export const validateRenavam = (renavam: string) => {
  const isValid = validateBr.renavam(renavam);
  if (!isValid) makeError(`Renavam ${renavam} é inválido.`);
}

export const validatePlate = (plate: string) => {
  const isValid = validateBr.placa(plate, true);
  if (!isValid) makeError(`Placa ${plate} é inválida.`);
}

export const validateChassi = (chassi: string) => {
  const isValid = validateBr.chassi(chassi);
  if (!isValid) makeError(`Chassi ${chassi} é inválido.`);
}