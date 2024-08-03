const existsOrError = (value, error) => {
  if (!value) throw error;
  if (Array.isArray(value) && value.length == 0) throw error;
  if (typeof value === "string" && !value.trim()) throw error;
};

const notExistsOrError = (value, error) => {
  try {
    existsOrError(value, error);
  } catch {
    return;
  }

  throw error;
};

const equalOrError = (valueA, valueB, error) => {
  if (valueA !== valueB) throw error;
};

const isValidEmailOrError = (email, error) => {
  var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
  if (!emailRegex.test(email)) throw error;
};

const isValidPasswordOrError = (password, error) => {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  if (!passwordRegex.test(password)) throw error;
};
const validTypeOrError = (value, type, error) => {
  if (value === undefined) return; 

  if (type === "array" && Array.isArray(value)) return
  
  if (type === "number" && typeof value === "string") {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw error;
    }
  } else if (typeof value !== type) {
    throw error;
  }
}


module.exports = {
  existsOrError,
  notExistsOrError,
  equalOrError,
  isValidEmailOrError,
  isValidPasswordOrError,
  validTypeOrError
};
